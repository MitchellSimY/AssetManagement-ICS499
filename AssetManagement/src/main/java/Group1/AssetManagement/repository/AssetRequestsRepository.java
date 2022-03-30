package Group1.AssetManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Group1.AssetManagement.model.AssetRequestsModel;

@Repository
public interface AssetRequestsRepository extends JpaRepository <AssetRequestsModel, Integer>{

}
