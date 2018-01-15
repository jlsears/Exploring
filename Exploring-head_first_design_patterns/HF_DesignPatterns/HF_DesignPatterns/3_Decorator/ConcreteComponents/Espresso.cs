using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
     class Espresso: Beverage
    {
        public override string getDescription()
        {
            return "Espresso";
        }

        public override double cost()
        {
            return 1.99;
        }
    }
}
