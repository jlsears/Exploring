using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public abstract class PizzaIngredientFactory
    {
        public abstract Dough createDough();
        public abstract Sauce createSauce();
        public abstract Cheese createCheese();
        public abstract Veggies[] createVeggies();
        public abstract Pepperoni createPepperoni();
        public abstract Clam createClam();
    }
}
