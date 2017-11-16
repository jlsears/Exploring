using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program2
    {
        static void Main(string[] args)
        {
            WeatherData snowy = new WeatherData();
            CurrentConditionsDisplay moreSnow = new CurrentConditionsDisplay();

            moreSnow.Subscribe(snowy);

            snowy.WeatherChange(55, 65);

            Console.ReadLine();
        }
    }
}
