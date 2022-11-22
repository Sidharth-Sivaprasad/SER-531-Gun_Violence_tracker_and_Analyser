package com.ser515.gunViolence;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GunViolenceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GunViolenceApplication.class, args);
	}

}
