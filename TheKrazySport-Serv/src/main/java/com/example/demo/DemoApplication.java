package com.example.demo;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		var user1 = new User("1", "Kevin", "Balavoine");
		var user2 = new User("2", "Etienne", "Choveau");
		var user3 = new User("3", "Mathis", "Desnoes");
		var user4 = new User("4", "Alexandre", "Palazon le Noen");

		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);
		userRepository.save(user4);

		System.out.println("-----------------");
		var users = userRepository.findAll();

		users.stream().forEach(u -> System.out.println(u));
	}
}
