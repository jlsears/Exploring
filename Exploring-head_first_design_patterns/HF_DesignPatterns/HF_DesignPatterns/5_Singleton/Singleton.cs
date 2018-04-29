using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    // sealed classes cannot be inherited
    public sealed class Singleton
    {
        private volatile static Singleton instance;

        // using the singletonObject instance to lock on, rather than the type itself,
        // in order to avoid deadlocks
        private static object singletonObject = new Object();

        private Singleton() { }

        // making static (class method) provides a global access point to the instance
        public static Singleton Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (singletonObject)
                    {
                        if (instance == null)
                        {
                            instance = new Singleton();
                            Console.WriteLine("About to return a singleton!");
                        }
                    }
                }
                return instance;
            }
        }
    }
}
