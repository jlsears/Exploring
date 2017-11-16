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
        private List<WeatherInfo> weatherConditions;

        public WeatherData()
        {
            observers = new List<IObserver<WeatherInfo>>();
            weatherConditions = new List<WeatherInfo>();
        }

        public IDisposable Subscribe(IObserver<WeatherInfo> observer)
        {
            if (!observers.Contains(observer))
            {
                observers.Add(observer);

                Console.WriteLine("have added subscrption for observer: " + observer);

                Console.WriteLine("showing weatherConditions as: " + weatherConditions);

                foreach (var item in weatherConditions)
                    observer.OnNext(item);
                    
            }
            Console.WriteLine("finished if for:" + observer);
            return new Unsubscriber<WeatherInfo>(observers, observer);
        }

        public void WeatherChange(int theTemp, int theHumidity)
        {
            var latestInfo = new WeatherInfo(theTemp, theHumidity);

            foreach (var observer in observers)
                observer.OnNext(latestInfo);
        }
    }
}
