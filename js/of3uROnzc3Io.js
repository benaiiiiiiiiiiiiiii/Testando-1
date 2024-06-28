
    console.log("javascript is working....................")
    function applyParams({inputUrl}) {
      console.log(inputUrl)
      const inputUrlObj = new URL(inputUrl, window.location.origin);
      const currentPageParams = new URLSearchParams(window.location.search);
      const inputUrlParams = new URLSearchParams(inputUrlObj.search);
    
      // Iterate over all parameters in the current page's URL
      for (const [key, value] of currentPageParams) {
        // If the input URL does not already contain the parameter, add it
        if (!inputUrlParams.has(key)) {
          inputUrlParams.append(key, value);
        }
      }
    
      // Construct the final URL
      const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
      console.log(finalUrl)
      return finalUrl;
    }

    const formatDate = (options = { slated: false, addDate: 0 }) => {
      const defaultOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    
      const today = new Date();
    
      if (options.slated) {
        const day = (today.getDate() + (options.addDate || 0)).toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
      }
    
      if(options.addDate){
        today.setDate(today.getDate()+options.addDate)
      }
      const formattedDate = today.toLocaleDateString(undefined, defaultOptions);
    
      return formattedDate;
    };
    
    const formatTime = () => {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };
    function runDelayedFunctions(data) {
      document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
      if(data?.setDisplayed){
        localStorage.setItem(data?.setDisplayed, true);
      }
    }
  
      (function() {
        function rdn(e, t) {
          return Math.floor(Math.random() * (t - e + 1) + e)
        }

        let initial = rdn(400,700);

        setInterval(() => {
          document.querySelectorAll('.atomicat-random').forEach(el => {
            el.innerText = initial.toString();
          });
          initial += rdn(-1, 2);
        }, 1000);

      })();
    

      (function() {
        const replaceItems = ["hoje-ext", "amanha-ext", "hoje", "ano", "amanha", "hora"]
        replaceItems.forEach(rI => {
          let innerData = ""
          if(rI == "hoje-ext"){
            innerData = formatDate()
          } else if(rI == "amanha-ext"){
            innerData = formatDate({addDate: 1})
          } else if(rI == "hoje"){
            innerData = formatDate({ slated: true })
          } else if(rI == "ano"){
            innerData = new Date().getFullYear()
          } else if(rI == "amanha"){
            innerData = formatDate({ slated: true, addDate: 1 })
          } else if(rI == "hora"){
            innerData = formatTime()
          }
          document.querySelectorAll('.atomicat-'+rI).forEach(el => {
            el.innerText = innerData
          });
        });
      })();

    