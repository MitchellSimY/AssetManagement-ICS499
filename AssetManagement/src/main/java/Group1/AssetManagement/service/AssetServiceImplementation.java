package Group1.AssetManagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Group1.AssetManagement.model.AssetModel;
import Group1.AssetManagement.repository.AssetRepository;

@Service
public class AssetServiceImplementation implements AssetService {

	@Autowired
	private AssetRepository assetRepo;
	
	@Override
	public AssetModel saveAsset(AssetModel asset) {
		return assetRepo.save(asset);
	}
	
	@Override
	public boolean returnAsset(AssetModel userAsset) {
		List<AssetModel> allAssets = getAllAssets();
		
		for (AssetModel asset : allAssets) {
			if (asset.getCheckoutUserId() != null) {
				if (asset.getCheckoutUserId().equals(userAsset.getCheckoutUserId())
						&& asset.getId() == userAsset.getId()) {
					asset.setCheckoutUserId(null);
					asset.setCheckedOut(false);
					assetRepo.flush();
				}
			}

		}
		
		
		return true;
	}
	
	@Override
	public List<AssetModel> getAllAssets() {
		return assetRepo.findAll();
	}
	
	@Override
	public List<AssetModel> getAllAvailableAssets() {
		List<AssetModel> allAssets = getAllAssets();
		List<AssetModel> availableAssets = new ArrayList<>();
		
		for (AssetModel asset : allAssets) {
			
			if (!asset.isHasRequest() || !asset.isCheckedOut()) {
				availableAssets.add(asset);
			}
		}
		
		return availableAssets;
	}
	
	@Override
	public AssetModel getAsset(Integer id) {
		return assetRepo.getById(id);
	}

	@Override
	public List<AssetModel> getUsersAssets(Integer id) {
		List<AssetModel> allAssets = getAllAssets();
		List<AssetModel> usersAssets = new ArrayList<AssetModel>();
		
		for (AssetModel asset : allAssets) {
			if (asset.getCheckoutUserId() == null) {
				
			} else {
				if (asset.getCheckoutUserId().equals(id)) {
					usersAssets.add(asset);
				}
			}
		}
		return usersAssets;
	}

	@Override
	public boolean deleteAsset(Integer id) {
		assetRepo.deleteById(id);
		return true;
	}

}

















