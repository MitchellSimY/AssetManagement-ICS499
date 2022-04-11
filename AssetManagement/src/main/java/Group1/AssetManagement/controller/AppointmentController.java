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

import Group1.AssetManagement.model.AppointmentModel;
import Group1.AssetManagement.model.AssetModel;
import Group1.AssetManagement.service.AppointmentService;
import Group1.AssetManagement.service.AssetService;
//
@RestController
@RequestMapping("/appointment")
@CrossOrigin
public class AppointmentController {

	@Autowired
	private AppointmentService apService;
	
	@PostMapping("/add")
	public String add(@RequestBody AppointmentModel app) {
		apService.saveAppointment(app);
		
		return "Asset successfully added";
	}
	
	@GetMapping("/getAllAppointments")
	public List<AppointmentModel> getAllAppointments() {
		return apService.getAllAppointments();
	}
	
	
	@GetMapping("/getAppointment/{id}")
	public AppointmentModel getAppointment(@PathVariable Integer id) {
		
		return apService.getAppointment(id);
	}
	
	@GetMapping("/getUserAppointment/{id}")
	public List<AppointmentModel> getUserAppointment(@PathVariable Integer id) {
		
		return apService.getUserAppointment(id);
	}
	
	@DeleteMapping("/deleteAppointment/{id}")
	public boolean deleteAppointment(@PathVariable Integer id) {
		return apService.deleteAppointment(id);
	}
	
}
