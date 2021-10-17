package App.Sport;

import java.util.Date;

public class Velo extends Sport{


    public Velo(float distance, Date debut, Date fin, String duree, float vitesse, String userId) {
        super(distance, debut, fin, duree, vitesse, userId);
        this.type = TypeSport.VELO;
    }
}
