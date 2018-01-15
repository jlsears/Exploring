using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class Program2
    {
        static void Main2(string[] args)
        {
            // Instantiating our subject/observable
            WeatherData snowy = new WeatherData();

            // Instantiating then subscribing one observer
            CurrentConditionsDisplay moreSnow = new CurrentConditionsDisplay();

            moreSnow.Subscribe(snowy);

            snowy.WeatherChange(55, 65);

            // Instantiating then subscribing another observer
            StatisticsDisplay loveSnow = new StatisticsDisplay();

            loveSnow.Subscribe(snowy);

            snowy.WeatherChange(46, 32);

            snowy.WeatherChange(38, 12);

            // Unsubscribing one observer
            moreSnow.Unsubscribe();

            snowy.WeatherChange(42, 18);

            // Then resubscribing that observer
            moreSnow.Subscribe(snowy);

            snowy.WeatherChange(44, 22);

            Console.ReadLine();
        }
    }
}
