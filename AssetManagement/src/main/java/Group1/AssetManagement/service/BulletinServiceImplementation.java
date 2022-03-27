package Group1.AssetManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Group1.AssetManagement.model.BulletinModel;
import Group1.AssetManagement.repository.BulletinRepository;

@Service
public class BulletinServiceImplementation implements BulletinService{

	@Autowired
	private BulletinRepository bulletinRepo;
	
	@Override
	public BulletinModel saveBulletin(BulletinModel bulletin) {
		return bulletinRepo.save(bulletin);
	}
	
	@Override
	public String deleteBulletin(Integer bulletinId) {
		bulletinRepo.deleteById(bulletinId);
		return "Bulletin deleted";
	}

	@Override
	public List<BulletinModel> getAllBulletins(){
		return bulletinRepo.findAll();
	}
	
}
