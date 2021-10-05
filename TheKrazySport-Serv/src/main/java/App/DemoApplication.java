package App.User;

import App.Sport.Sport;
import App.Sport.SportService;
import App.Sport.Velo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    private SportService sportService;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        var sport = new Velo(100, 180,30, "19");
        sportService.addSport(sport);
    }
}
