package Group1.AssetManagement.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class AssetModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String deviceCategory, deviceName, deviceLocation, deviceDescription;
	
	private Integer checkoutUserId;

	@JsonProperty("isCheckedOut")
	private boolean isCheckedOut;
	
	@JsonProperty("hasRequest")
	private boolean hasRequest;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDeviceCategory() {
		return deviceCategory;
	}

	public void setDeviceCategory(String deviceCategory) {
		this.deviceCategory = deviceCategory;
	}

	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}

	public String getDeviceLocation() {
		return deviceLocation;
	}

	public void setDeviceLocation(String deviceLocation) {
		this.deviceLocation = deviceLocation;
	}

	public String getDeviceDescription() {
		return deviceDescription;
	}

	public void setDeviceDescription(String deviceDescription) {
		this.deviceDescription = deviceDescription;
	}

	public Integer getCheckoutUserId() {
		return checkoutUserId;
	}

	public void setCheckoutUserId(Integer checkoutUserId) {
		this.checkoutUserId = checkoutUserId;
	}

	public boolean isCheckedOut() {
		return isCheckedOut;
	}

	public void setCheckedOut(boolean isCheckedOut) {
		this.isCheckedOut = isCheckedOut;
	}

	public boolean isHasRequest() {
		return hasRequest;
	}

	public void setHasRequest(boolean hasRequest) {
		this.hasRequest = hasRequest;
	}

	
}
