# GeminiBoost
GeminiBoost is a javascript boost for Google Gemini that creates a shortcut to Gemini from a new tab in Arc.
## Installation
To install GeminiBoost, follow these steps:

1. Go to [Google Gemini](https://gemini.google.com/) in Arc
2. Create a new boost and copy the contents of [boost.js](https://github.com/fc1018/geminiboost/blob/master/boost.js) into the JS section of the boost and save
3. Go to arc://settings/searchEngines
4. Add a new site search
5. Input the following entries:
   
     Search Engine = `Google Gemini`
   
     Shortcut = `Gemini`
   
     URL with %s in place of query = `https://gemini.google.com/?question=%s`
7. Save site search

## Usage
When the new tab shortcut <kbd>⌘ Command</kbd> <kbd>T</kbd> is used in arc, the site search for 
Google Gemini can be initialised using the "Gemini" keyword followed by tab. A query can then be entered and when submitted will open Gemini with the query
automatically submitted.

## Compatibility
GeminiBoost has been tested to be compatible with Arc for MacOS 1.104.0 (65533) and Google Gemini update 2025.06.19

Arc for Windows version [pending boost support]( https://x.com/cifilter/status/1850868958699647427).
## Feedback
If you have any feedback, suggestions, or issues with GeminiBoost, please feel free to open an issue on GitHub.
