using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class NYPizzaIngredientFactory : PizzaIngredientFactory
    {
        public override Dough createDough()
        {
            return new ThinCrustDough();
        }

        public override Sauce createSauce()
        {
            return new MarinaraSauce();
        }

        public override Cheese createCheese()
        {
            return new ReggianoCheese();
        }

        public override Veggies[] createVeggies()
        {
            Veggies[] veggies = new Veggies[] { new Garlic(), new Onion(), new Mushroom(), new RedPepper() };
            return veggies;
        }

        public override Pepperoni createPepperoni()
        {
            return new SlicedPeppers();
        }

        public override Clam createClam()
        {
            return new FreshClams();
        }
    }
}
