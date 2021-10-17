package App.Sport;

import java.util.Date;

public class Cap extends Sport{

    public int bpm;

    public Cap(float distance, Date debut, Date fin, String duree, float vitesse, String userId) {
        super(distance, debut, fin, duree, vitesse, userId);
        this.type = TypeSport.CAP;
        this.bpm = bpm;
    }


    public int getBpm() {
        return bpm;
    }

    public void setBpm(int bpm) {
        this.bpm = bpm;
    }
}
