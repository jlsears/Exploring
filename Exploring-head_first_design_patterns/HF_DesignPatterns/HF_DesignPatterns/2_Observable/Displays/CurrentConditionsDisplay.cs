using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class CurrentConditionsDisplay: IObserver<WeatherInfo>
    {
        
        private float temperature;
        private float humidity;

        private IDisposable cancellation;

        public virtual void Subscribe(WeatherData provider)
        {
            cancellation = provider.Subscribe(this);
        }

        public virtual void Unsubscribe()
        {
            cancellation.Dispose();
        }

        public virtual void OnCompleted()
        {
            // action upon completion
        }

        public virtual void OnNext(WeatherInfo info)
        {
            // action upon updates
            Console.WriteLine("hitting the OnNext");
            this.temperature = info.CurrentTemp;
            this.humidity = info.CurrentHumidity;
            Display();

        }

        public virtual void OnError(Exception e)
        {
            // No implementation needed
        }

        public virtual void Display()
        {
            Console.WriteLine("Look, new temp info! Temp is: " + this.temperature + " and humidity is: " + this.humidity + "!");
        }
    }
}
