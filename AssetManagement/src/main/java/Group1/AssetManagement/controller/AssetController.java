package Group1.AssetManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Group1.AssetManagement.model.AssetModel;
import Group1.AssetManagement.service.AssetService;
//
@RestController
@RequestMapping("/asset")
@CrossOrigin
public class AssetController {

	@Autowired
	private AssetService assetService;
	
	@PostMapping("/add")
	public String add(@RequestBody AssetModel asset) {
		assetService.saveAsset(asset);
		
		return "Asset successfully added";
	}
	
	@GetMapping("/getAllAssets")
	public List<AssetModel> getAllAssets() {
		return assetService.getAllAssets();
	}
	
	@GetMapping("/getAllAvailableAssets")
	public List<AssetModel> getAllAvailableAssets() {
		return assetService.getAllAvailableAssets();
	}
	
	@GetMapping("/getAsset/{id}")
	public AssetModel getAsset(@PathVariable Integer id) {
		
		return assetService.getAsset(id);
	}
	
	@GetMapping("/getUsersAssets/{id}")
	public List<AssetModel> getUsersAssets(@PathVariable Integer id) {
		
		return assetService.getUsersAssets(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteAsset(@PathVariable Integer id) {
		return assetService.deleteAsset(id);
	}
	
	
}
