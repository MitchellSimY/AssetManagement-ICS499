package Group1.AssetManagement.service;

import java.util.List;

import Group1.AssetManagement.model.BulletinModel;

public interface BulletinService {
	public BulletinModel saveBulletin(BulletinModel bulletin);
	
	public String deleteBulletin(Integer bulletinId);

	public List<BulletinModel> getAllBulletins();

}
