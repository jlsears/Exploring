using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class WildTurkey : ITurkey
    {
        public void gobble()
        {
            Console.WriteLine("Gobble gobble");
        }

        public void fly()
        {
            Console.WriteLine("I'm flying a short distance");
        }
    }
}
