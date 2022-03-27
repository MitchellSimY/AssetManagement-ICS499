package Group1.AssetManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Group1.AssetManagement.model.BulletinModel;

@Repository
public interface BulletinRepository extends JpaRepository <BulletinModel, Integer> {

}
