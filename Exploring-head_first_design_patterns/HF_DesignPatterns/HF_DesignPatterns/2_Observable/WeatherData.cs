using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class WeatherData: IObservable<WeatherInfo>
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
            // Creating a new instance of the WeatherInfo object containing the updated
            // data, which can then be cohesively passed along to the observers
            var latestInfo = new WeatherInfo(theTemp, theHumidity);

            Console.WriteLine("WeatherChange called");

            // Calling the OnNext/Update method that each of the observers has implemented
            // and passing that newly created WeatherInfo object along to them
            foreach (var observer in observers)
                observer.OnNext(latestInfo);
        }
    }
}
