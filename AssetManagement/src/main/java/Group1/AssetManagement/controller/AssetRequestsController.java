package Group1.AssetManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Group1.AssetManagement.model.AssetRequestsModel;
import Group1.AssetManagement.service.AssetRequestsService;

@RestController
@RequestMapping("/assetRequest")
@CrossOrigin
public class AssetRequestsController {
	
	@Autowired
	private AssetRequestsService arService;
	
	@PostMapping("/add")
	public boolean add(@RequestBody AssetRequestsModel request) {
		return (arService.saveAssetRequest(request) != null ? true : false);
	}
	

}
