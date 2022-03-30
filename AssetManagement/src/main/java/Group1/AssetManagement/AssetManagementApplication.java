package Group1.AssetManagement;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AssetManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssetManagementApplication.class, args);
		
		
		
		// ===
//		InetAddress myIP = null;
//		try {
//			myIP = InetAddress.getLocalHost();
//		} catch (UnknownHostException e ) {
//			System.out.println(e);
//		}
//		
//		String IPAddress = myIP.getHostAddress();
//		String hostName = myIP.getHostAddress();
//		
//		System.out.println("ipAddress" + IPAddress);
//		System.out.println("hostName" + hostName);
		
	}

}
