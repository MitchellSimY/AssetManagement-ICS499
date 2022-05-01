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
		return (arService.saveAssetRequest(request) ? true : false);
	}
	
	@GetMapping("/getAllReqs")
	public List<AssetRequestsModel> getAllRequests() {
		return arService.getAllRequests();
	}
	
	@GetMapping("/getAllUnaproved")
	public List<AssetRequestsModel> getAllUnapproved() {
		return arService.getAllUnapprovedRequests();
	}
	
	@GetMapping("/getUsersRequests/{userId}")
	public List<AssetRequestsModel> getUsersRequests(@PathVariable Integer userId) {
		return arService.getUsersRequests(userId);
	}

	@DeleteMapping("/delete/{requestId}")
	public String delete(@PathVariable Integer requestId) {
		arService.deleteRequest(requestId);
		return "Deleted request";
	}
	
	@PostMapping("/approveRequest/{reqId}")
	public boolean approveRequest(@PathVariable Integer reqId) {
		return arService.approveRequest(reqId);
	}
}
