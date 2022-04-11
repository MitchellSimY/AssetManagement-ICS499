package Group1.AssetManagement.service;

import java.util.List;

import Group1.AssetManagement.model.AppointmentModel;

public interface AppointmentService {
	
	public boolean saveAppointment(AppointmentModel app);
	
	public List<AppointmentModel> getAllAppointments();
	
	public AppointmentModel getAppointment(Integer id);
	
	public boolean deleteAppointment(Integer id);

	public List<AppointmentModel> getUserAppointment(Integer id);

}
