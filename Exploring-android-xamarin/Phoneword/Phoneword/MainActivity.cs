﻿using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using System.Threading;
using System.Threading.Tasks;

namespace Phoneword
{
    [Activity(Label = "Phone Word", MainLauncher = true)]
    public class MainActivity : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            //*************************************************
            // Setup
            //*************************************************

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            // Get UI controls from the loaded layout
            EditText phoneNumberText = FindViewById<EditText>(Resource.Id.PhoneNumberText);
            Button translateButton = FindViewById<Button>(Resource.Id.TranslateButton);
            Button callButton = FindViewById<Button>(Resource.Id.CallButton);

            // Disable the "Call" button
            callButton.Enabled = false;

            // Add code to translate the number
            string translatedNumber = string.Empty;


            //*************************************************
            // Translating and displaying the number
            //*************************************************

            translateButton.Click += async (object sender, EventArgs e) =>
            {
                // Translate user's alphanumeric code to numeric
                translatedNumber = await Task.Run(() => Core.PhonewordTranslator.ToNumber(phoneNumberText.Text));
                if (string.IsNullOrWhiteSpace(translatedNumber))
                {
                    // nothing to display, nothing to call
                    callButton.Text = "Call";
                    callButton.Enabled = false;
                }
                else
                {   
                    // displaying translated number and staging t
                    callButton.Text = "Call " + translatedNumber;
                    callButton.Enabled = true;
                }
            };


            //*************************************************
            // Calling the number
            //*************************************************

            callButton.Click += (object sender, EventArgs e) =>
            {
                // On "Call" button click, try to dial phone number
                var callDialog = new AlertDialog.Builder(this);
                callDialog.SetMessage("Call " + translatedNumber + "?");
                callDialog.SetNeutralButton("Call", delegate
                {
                    // Create intent to dial phone
                    var callIntent = new Intent(Intent.ActionCall);
                    callIntent.SetData(Android.Net.Uri.Parse("tel:" + translatedNumber));
                    StartActivity(callIntent);
                });
                callDialog.SetNegativeButton("Cancel", delegate { });

                // Show the alert dialog to the user and wait for response
                callDialog.Show();
            };

        }
    }
}

