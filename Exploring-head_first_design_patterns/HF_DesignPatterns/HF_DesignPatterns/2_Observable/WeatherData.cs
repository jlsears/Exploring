using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class WeatherData : IObservable<WeatherInfo>
    {
        private List<IObserver<WeatherInfo>> observers;

        public WeatherData()
        {
            observers = new List<IObserver<WeatherInfo>>();
        }

        public IDisposable Subscribe(IObserver<WeatherInfo> observer)
        {
            if (!observers.Contains(observer))
            {
                observers.Add(observer);

                Console.WriteLine("have added subscrption for observer: " + observer);                    
            }
            Console.WriteLine("finished if for:" + observer);
            return new Unsubscriber<WeatherInfo>(observers, observer);
        }

        public void WeatherChange(int theTemp, int theHumidity)
        {
            var latestInfo = new WeatherInfo(theTemp, theHumidity);

            Console.WriteLine("WeatherChange called");

            foreach (var observer in observers)
                observer.OnNext(latestInfo);
        }
    }
}
