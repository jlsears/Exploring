using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class HouseBlend: Beverage
    {
        public override string getDescription()
        {
            return "House Blend Coffee";
        }

        public override double cost()
        {
            return .89;
        }
    }
}
