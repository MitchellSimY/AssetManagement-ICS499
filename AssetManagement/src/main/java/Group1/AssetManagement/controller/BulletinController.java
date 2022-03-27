package Group1.AssetManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Group1.AssetManagement.model.BulletinModel;
import Group1.AssetManagement.service.BulletinService;

@RestController
@RequestMapping("/bulletin")
@CrossOrigin
public class BulletinController {

	@Autowired
	private BulletinService bulletinService;
	
	@PostMapping("/add")
	public String add(@RequestBody BulletinModel bulletin) {
		bulletinService.saveBulletin(bulletin);
		return "Bulletin Added!";
	}
	
	@DeleteMapping("/delete")
	public String delete(Integer id) {
		bulletinService.deleteBulletin(id);
		return "Bulletin deleted!";
	}
	
	@GetMapping("/getAllBulletins")
	public List<BulletinModel> getAllBulletins(){
		return bulletinService.getAllBulletins();
	}
}
