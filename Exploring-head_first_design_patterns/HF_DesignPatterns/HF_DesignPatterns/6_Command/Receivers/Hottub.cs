using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class Hottub
    {
        public Hottub() { }

        public void on()
        {
            Console.WriteLine("Hottub heating up to 104 degrees");
        }

        public void off()
        {
            Console.WriteLine("Hottub cooling down to 98 degrees");
        }
    }
}
