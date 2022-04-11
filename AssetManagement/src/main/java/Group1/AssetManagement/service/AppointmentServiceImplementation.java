package Group1.AssetManagement.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Group1.AssetManagement.model.AppointmentModel;
import Group1.AssetManagement.model.AssetModel;
import Group1.AssetManagement.model.AssetRequestsModel;
import Group1.AssetManagement.model.UserModel;
import Group1.AssetManagement.repository.AppointmentRepository;
import Group1.AssetManagement.repository.AssetRepository;
import Group1.AssetManagement.repository.AssetRequestsRepository;
import Group1.AssetManagement.repository.UserRepository;

@Service
public class AppointmentServiceImplementation implements AppointmentService {
	
	@Autowired
	private AppointmentRepository appRepo;

	@Override
	public boolean saveAppointment(AppointmentModel app) {
		appRepo.save(app);
		return true;
	}

	@Override
	public List<AppointmentModel> getAllAppointments() {
		
		return appRepo.findAll();
	}

	@Override
	public AppointmentModel getAppointment(Integer id) {
		
		return appRepo.getById(id);
	}

	@Override
	public boolean deleteAppointment(Integer id) {
		appRepo.deleteById(id);
		return true;
	}

	@Override
	public List<AppointmentModel> getUserAppointment(Integer id) {
		List<AppointmentModel> allAppointments = getAllAppointments();
		List<AppointmentModel> userAppointments = new ArrayList<AppointmentModel>();
		
		
		for (AppointmentModel appointment : allAppointments) {
			if (appointment.getRequestorId() == id) {
				userAppointments.add(appointment);
			}
		}
		
		return userAppointments;
	}



}
