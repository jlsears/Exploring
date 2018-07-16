using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public abstract class CaffeineBeverage
    {
        public void prepareRecipe()
        {
            boilWater();
            brew();
            pourInCup();
            if (customerWantsCondiments()) { addCondiments(); }
            enjoy();
            
        }

        public abstract void brew();

        public abstract void addCondiments();

        void boilWater() { Console.WriteLine("Boiling water"); }

        void pourInCup() { Console.WriteLine("Pouring into cup"); }

        // hook method

        public virtual Boolean customerWantsCondiments() { return true;  }

        void enjoy() { Console.WriteLine("Enjoy!"); }

    }
}
