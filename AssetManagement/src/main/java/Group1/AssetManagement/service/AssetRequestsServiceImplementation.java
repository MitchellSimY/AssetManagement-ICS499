package Group1.AssetManagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Group1.AssetManagement.model.AssetModel;
import Group1.AssetManagement.model.AssetRequestsModel;
import Group1.AssetManagement.model.UserModel;
import Group1.AssetManagement.repository.AssetRepository;
import Group1.AssetManagement.repository.AssetRequestsRepository;
import Group1.AssetManagement.repository.UserRepository;

@Service
public class AssetRequestsServiceImplementation implements AssetRequestsService{

	@Autowired
	private AssetRequestsRepository arRepo;
	
	@Autowired
	private AssetRepository asRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public boolean saveAssetRequest(AssetRequestsModel assetReq) {
		arRepo.save(assetReq);
		
		AssetModel asset = asRepo.getById(assetReq.getDeviceId());
		
		asset.setHasRequest(true);
		asRepo.flush();
		
		return true;
	}

	@Override
	public List<AssetRequestsModel> getAllRequests() {
		
		return arRepo.findAll();
	}
	
	@Override
	public List<AssetRequestsModel> getUsersRequests(Integer userId) {
		List<AssetRequestsModel> allReqs = getAllRequests();
		List<AssetRequestsModel> userReqs = new ArrayList<>();
		
		for (AssetRequestsModel req : allReqs) {
			if (req.getRequestorId().equals(userId)) {
				userReqs.add(req);
			}
		}
		
		return userReqs;
	}

	@Override
	public List<AssetRequestsModel> getAllUnapprovedRequests() {
		List<AssetRequestsModel> listOfAssetReq = arRepo.findAll();
		List<AssetRequestsModel> listOfUnapprovedRequests = new ArrayList<>();
		
		for (AssetRequestsModel asReq : listOfAssetReq) {
			if (!asReq.isApproved()) {
				listOfUnapprovedRequests.add(asReq);
			}
		}
		
		return listOfUnapprovedRequests;
	}

	@Override
	public AssetRequestsModel getAsset(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteRequest(Integer id) {
		AssetRequestsModel assetRequest = arRepo.getById(id);
		
		arRepo.deleteById(id);
		AssetModel asset = asRepo.getById(assetRequest.getDeviceId());
		asset.setHasRequest(false);
		asRepo.flush();
		
		return "Request Deleted";
	}

	@Override
	public boolean approveRequest(Integer reqId) {
		try {
			AssetRequestsModel assetReq = arRepo.getById(reqId);
			AssetModel asset = asRepo.getById(assetReq.getDeviceId());
			UserModel user = userRepo.getById(assetReq.getRequestorId());
			
			asset.setCheckoutUserId(assetReq.getRequestorId());
			asset.setHasRequest(false);
			asset.setCheckedOut(true);
			arRepo.deleteById(reqId);
			arRepo.flush();
			asRepo.flush();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
