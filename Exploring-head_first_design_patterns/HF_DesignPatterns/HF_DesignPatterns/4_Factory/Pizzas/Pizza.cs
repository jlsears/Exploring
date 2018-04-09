using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public abstract class Pizza
    {
        public String name;

        public Dough dough;
        public Sauce sauce;
        public Array veggies;
        public Cheese cheese;
        public Pepperoni pepperoni;
        public Clam clams;

        public abstract void prepare();

        public void bake()
        {
            Console.WriteLine("Bake for 25 minutes at 350");
        }

        public void cut()
        {
            Console.WriteLine("Cutting the pizza into diagonal slices");
        }

        public void box()
        {
            Console.WriteLine("Place pizza in official PizzaStore box");
        }

        public void setName(String name)
        {
            this.name = name;
        }

        public virtual string getName()
        {
            return name;
        }

        //public string toString()
        //{
        //    // code to print pizza here
        //}
    }
}
