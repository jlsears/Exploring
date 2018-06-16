using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class Light
    {
        String location;

        public Light(string location) { this.location = location; }

        public void on()
        {
            Console.WriteLine("Light is on");
        }

        public void off()
        {
            Console.WriteLine("Light is off");
        }
    }
}
