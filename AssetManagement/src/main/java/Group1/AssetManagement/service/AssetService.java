package Group1.AssetManagement.service;

import java.util.List;

import Group1.AssetManagement.model.AssetModel;
//
public interface AssetService {
	public AssetModel saveAsset(AssetModel asset);
	
	public List<AssetModel> getAllAssets();
	
	public AssetModel getAsset(Integer id);
}
