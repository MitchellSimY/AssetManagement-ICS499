package Group1.AssetManagement.service;

import java.util.List;

import Group1.AssetManagement.model.AssetRequestsModel;

public interface AssetRequestsService {
	
	public AssetRequestsModel saveAssetRequest(AssetRequestsModel asset);
	
	public List<AssetRequestsModel> getAllRequests();
	
	public List<AssetRequestsModel> getAllUnapprovedRequests();
	
	public AssetRequestsModel getAsset(Integer id);
	
	public String deleteRequest(Integer id);

}
