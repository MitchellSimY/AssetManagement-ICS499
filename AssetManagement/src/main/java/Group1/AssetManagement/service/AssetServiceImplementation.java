package Group1.AssetManagement.service;

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
	public List<AssetModel> getAllAssets() {
		return assetRepo.findAll();
	}

	@Override
	public AssetModel getAsset(Integer id) {
		
		List<AssetModel> listOfAssets = assetRepo.findAll();
		
		for (AssetModel asset : listOfAssets) {
			if (asset.getId() == id) {
				return asset;
			}
		}
		return null;
	}

}

















