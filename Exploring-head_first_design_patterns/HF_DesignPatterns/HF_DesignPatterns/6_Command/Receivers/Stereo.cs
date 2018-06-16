using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class Stereo
    {
        String location;

        public Stereo(String location) { this.location = location; }

        public void on() { Console.WriteLine("Stereo is on"); }
        public void off() { Console.WriteLine("Stereo is off"); }
        public void setCD() { Console.WriteLine("Stereo is set for CD input"); }
        public void setDVD() { Console.WriteLine("Stereo is set for DVD input"); }
        public void setRadio() { Console.WriteLine("Stereo is set for radio"); }
        public void setVolume(int vol) { Console.WriteLine("Stereo volume is set to " + vol); }
    }
}
