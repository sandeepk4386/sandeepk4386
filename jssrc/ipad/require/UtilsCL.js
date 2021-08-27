define(function() {
    var deviceUtil = require("DeviceUtil");
    var UserStore = require("UserStore");
    var StoreKeys = require("StoreKeys");
    var Utils = {
        keyStr: "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=",
        isNullorEmpty: function(value) {
            if (((typeof(value) == "undefined") || (value === null) || (value === "null") || (value === "") || (value === undefined) || (value === " "))) {
                return true;
            } else {
                return false;
            }
        },
        isEmptyArray: function(data) {
            var flag = false;
            if ("" === data || undefined === data || null === data || [] == data || data.length === 0) flag = true;
            return flag;
        },
        createFacetCodeMap: function(res) {
            var map = {};
            if (!Utils.isNullorEmpty(res)) {
                let breadCrumbs = res.breadcrumbs;
                for (var i in breadCrumbs) {
                    let facetName = breadCrumbs[i].facetName;
                    if (!map[facetName]) {
                        map[facetName] = breadCrumbs[i].facetCode;
                    }
                }
            }
            return map;
        },
        navigate: function(frmName, params, formArray) {
            var currentForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currentForm) && currentForm.id != frmName) {
                if (formArray == G_Navigation_History) {
                    if (formArray[formArray.length - 1] !== currentForm.id) formArray.push(currentForm.id);
                } else if (formArray == G_Cart_Navigation_History) {
                    formArray.push(currentForm.id);
                }
            }
            if (frmName === "frmDOSHome" && Utils.isEmptyArray(gblDosDataArray)) {
                fetchDOSData("frmDOSHome", gblDOSHomeQuery);
                return;
            }
            var nav = new kony.mvc.Navigation(frmName);
            nav.navigate(params);
        },
        backNavigate(formArray) {
            var navigationArrayLen = formArray.length;
            var currentForm = kony.application.getCurrentForm();
            if (currentForm.id === "frmNotificationSettings") {
                new kony.mvc.Navigation("frmNotifications").navigate();
            } else if (navigationArrayLen > 0) {
                var frmName = formArray.pop();
                if (frmName === "frmDOSHome" && (Utils.isNullorEmpty(gblDosDataArray) || Utils.isEmptyArray(gblDosDataArray))) {
                    fetchDOSData("frmDOSHome", gblDOSHomeQuery);
                    return;
                }
                var nav = new kony.mvc.Navigation(frmName);
                nav.navigate();
            } else { // when formarray is empty
                fetchDOSData("frmDOSHome", gblDOSHomeQuery);
            }
        },
        removeItemsFromArray: function(array, value1, value2) {
            for (var i = array.length - 1; i >= 0; i--) {
                if (array[i] === value1 || array[i] === value2) {
                    array.splice(i, 1);
                }
            }
            return array;
        },
        animate: function(element, params, duration, callback, delay) {
            duration = duration || 0.25;
            callback = callback || null;
            delay = delay || 0;
            params.stepConfig = {
                "timingFunction": kony.anim.EASE
            };
            element.animate(kony.ui.createAnimation({
                "100": params,
            }), {
                "delay": delay,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": duration
            }, {
                "animationEnd": callback
            });
        },
        isNetworkAvailable: function() {
            var currForm = kony.application.getCurrentForm();
            if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                Utils.hideLoadingIndicator();
                var message = kony.i18n.getLocalizedString("i18n.clorox.internetUnavailable") + ErrorCodes.LOGIN_VALIDATION_NETWORK_UNAVAILABLE;
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.flxGenericError.skin = "sknFlxBlack53Opacity";
                    if (currForm.id === "frmDOSHome") {
                        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissDOSInternetLossPopup);
                    } else {
                        currForm.GenericError.displayText(kony.i18n.getLocalizedString("i18n.clorox.information"), message, kony.i18n.getLocalizedString("i18.clorox.ok"), Utils.dismissInternetLossPopup);
                    }
                    currForm.flxGenericError.setVisibility(true);
                }
                return false;
            }
            return true;
        },
        encode64: function(input) {
            input = escape(input);
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + Utils.keyStr.charAt(enc1) + Utils.keyStr.charAt(enc2) + Utils.keyStr.charAt(enc3) + Utils.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
            return output;
        },
        replaceAll: function(word, character, replaceChar) {
            while (word.indexOf(character) != -1) {
                word = word.replace(character, replaceChar);
            }
            return word;
        },
        replaceAllRegEx: function(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        },
        isLessThan: function(version1, version2) {
            /**
             * method which checks whether version1 is less than version2 
             * ex: if version1 is 6.1.1 and version2 is 8.1.2 then it returns true
             */
            var verArr1 = version1.split(".");
            var verArr2 = version2.split(".");
            for (var i = 0; i < verArr1.length; i++) {
                if (parseInt(verArr2[i]) > parseInt(verArr1[i])) {
                    return true;
                } else if (parseInt(verArr2[i]) < parseInt(verArr1[i])) {
                    break;
                }
            }
            return false;
        },
        days_remaining: function(date1, date2) {
            // The number of milliseconds in one day
            var ONE_DAY = 1000 * 60 * 60 * 24;
            // Convert both dates to milliseconds
            var date1_ms = date1.getTime();
            var date2_date = date2.split(" ")[0];
            var date_split = date2_date.split("-");
            var date2_time = date2.split(" ")[1];
            var time_split = date2_time.split(":");
            var date2_final = new Date(date_split[0], "" + parseInt(date_split[1]) - 1, date_split[2], time_split[0], time_split[1], time_split[2]);
            var date2_ms = new Date(date2_final).getTime();
            // Calculate the difference in milliseconds
            var difference_ms = Math.abs(date1_ms - date2_ms);
            var daysBetween = Math.round(difference_ms / ONE_DAY);
            var daysRemaining = (kony.os.toNumber(G_CONFIG_PARAMS.G_SERRUCHO_REQUEST_EXPIRE_DURATION) - daysBetween);
            // Convert back to days and return
            return daysRemaining;
        },
        trimSpaces: function(value) {
            /**
             * method to trim the spaces 
             */
            if (!Utils.isNullorEmpty(value)) {
                return value.trim();
            } else {
                return "";
            }
        },
        merge: function(jsonObj1, jsonObj2) {
            /**
             * method to merge 2 json objects by overwriting the contents in jsonObj1
             * 
             */
            for (var attrName in jsonObj2) {
                jsonObj1[attrName] = jsonObj2[attrName];
            }
            return jsonObj1;
        },
        showLoadingIndicator: function() {
            var curntForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(curntForm) && !Utils.isNullorEmpty(curntForm.loadingIndicator)) {
                Utils.hideDefaultLoading();
                curntForm.loadingIndicator.isVisible = true;
                curntForm.loadingIndicator.zIndex = 150;
            }
        },
        hideLoader: function(curntForm) {
            if (!Utils.isNullorEmpty(curntForm) && !Utils.isNullorEmpty(curntForm.loadingIndicator)) {
                curntForm.loadingIndicator.isVisible = false;
                curntForm.loadingIndicator.zIndex = 1;
            }
            Utils.hideDefaultLoading();
        },
        hideLoadingIndicator: function() {
            var curntForm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(curntForm) && !Utils.isNullorEmpty(curntForm.loadingIndicator)) {
                curntForm.loadingIndicator.isVisible = false;
                curntForm.loadingIndicator.zIndex = 1;
            }
            Utils.hideDefaultLoading();
        },
        showDefaultLoading: function() {
            kony.application.showLoadingScreen("sknFlxLoading", kony.i18n.getLocalizedString("i18n.clorox.loadingInd"), constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        },
        hideDefaultLoading: function() {
            kony.application.dismissLoadingScreen();
        },
        formatDate: function(date, formatYear) {
            var prefLang = UserStore.getUserParam(StoreKeys.PREF_LANG);
            var countryCode = gblPartyCountry;
            var datum = date.split("-");
            var newDate = date;
            if (!Utils.isNullorEmpty(datum[0]) && !Utils.isNullorEmpty(datum[1]) && !Utils.isNullorEmpty(datum[2])) {
                if (!Utils.isNullorEmpty(formatYear)) {
                    datum[0] = String(datum[0]).substring(2, 4);
                }
                if (!Utils.isNullorEmpty(datum[1])) {
                    if (datum[1].length == 3) {
                        datum[1] = getMonthNumber(datum[1]);
                    }
                }
                if (countryCode == AppConstants.G_COUNTRY.US) {
                    newDate = datum[1] + "/" + datum[2] + "/" + datum[0];
                } else if (countryCode == AppConstants.G_COUNTRY.DO) {
                    newDate = datum[1] + "/" + datum[2] + "/" + datum[0];
                } else if (countryCode == AppConstants.G_COUNTRY.CA) {
                    if (prefLang == AppConstants.G_LANGUAGE.CA_FRENCH || prefLang == "FR") {
                        newDate = datum[0] + "-" + datum[1] + "-" + datum[2];
                    } else {
                        newDate = newDate = datum[2] + "/" + datum[1] + "/" + datum[0];
                    }
                }
                return newDate;
            } else {
                return "--";
            }
        },
        formatDateMMDDYYYY: function(date, formatYear) {
            var prefLang = UserStore.getUserParam(StoreKeys.PREF_LANG);
            var countryCode = gblPartyCountry;
            var datum = date.split("-");
            var newDate = date;
            if (!Utils.isNullorEmpty(datum[0]) && !Utils.isNullorEmpty(datum[1]) && !Utils.isNullorEmpty(datum[2])) {
                if (!Utils.isNullorEmpty(formatYear)) {
                    datum[0] = String(datum[0]).substring(2, 4);
                }
                if (!Utils.isNullorEmpty(datum[1])) {
                    if (datum[1].length == 3) {
                        datum[1] = getMonthNumber(datum[1]);
                    }
                }
                if (countryCode == AppConstants.G_COUNTRY.US) {
                    newDate = datum[1] + "/" + datum[2] + "/" + datum[0];
                } else if (countryCode == AppConstants.G_COUNTRY.DO) {
                    newDate = datum[1] + "/" + datum[2] + "/" + datum[0];
                } else if (countryCode == AppConstants.G_COUNTRY.CA) {
                    if (prefLang == AppConstants.G_LANGUAGE.CA_FRENCH || prefLang == "FR") {
                        newDate = datum[0] + "-" + datum[1] + "-" + datum[2];
                    } else {
                        newDate = newDate = datum[1] + "/" + datum[2] + "/" + datum[0];
                    }
                }
                return newDate;
            } else {
                return "--";
            }
        },
        formatdateMonth: function(date) {
            var year = date.substring(0, 4);
            var month = date.substring(4, 6);
            var dateNum = date.substring(6, 8);
            if (!Utils.isNullorEmpty(year) && !Utils.isNullorEmpty(month) && !Utils.isNullorEmpty(dateNum)) {
                var month_namee = this.month_name(new Date(month + '/' + dateNum + '/' + year));
                return parseInt(dateNum) + "-" + month_namee;
            } else {
                return "--";
            }
        },
        month_name: function(dt) {
            var mlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return mlist[dt.getMonth()];
        },
        getDateDDMMYYYYFormat: function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = dd + '/' + mm + '/' + yyyy;
            return today;
        },
        checkAndroidNativeSetting: function() {
            var notificationCombat = java.import("androidx.core.app.NotificationManagerCompat");
            var KonyMain = java.import('com.konylabs.android.KonyMain');
            var context = KonyMain.getActivityContext();
            return notificationCombat.from(context).areNotificationsEnabled();
        },
        checkIosNativeSetting: function() {
            try {
                var iosMain = objc.import("UIApplication");
                var settings = iosMain.sharedApplication().currentUserNotificationSettings;
                return settings.types;
            } catch (err) {
                kony.print("exception in checkIosNativeSetting-->" + err);
                return false;
            }
        },
        getDateDataBaseFormat: function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + "-" + mm + "-" + dd;
            return today;
        },
        generateRandomNum: function() {
            //generate random number from 1 to 40.
            var positioncode = UserStore.getPositionCode();
            if (Utils.isNullorEmpty(positioncode)) {
                positioncode = Math.floor((Math.random() * 40) + 1);
                UserStore.storePositionCode(positioncode);
            }
            return positioncode;
        },
        //This Method would Show an Info Alert  
        showErrorAlert: function(msg, title, handle) {
            if (Utils.isNullorEmpty(title)) {
                title = kony.i18n.getLocalizedString("i18n.common.error");
            }
            if (Utils.isNullorEmpty(handle)) {
                handle = Utils.hideLoadingIndicator;
            }
            var currForm = kony.application.getCurrentForm();
            if (currForm && currForm.id === "frmLogin") {
                nativeLoginController.logout();
            }
            var yeslabel = kony.i18n.getLocalizedString("i18n.common.Ok.Caps");
            if (title == kony.i18n.getLocalizedString("i18n.clorox.timeOut")) yeslabel = kony.i18n.getLocalizedString("i18n.clorox.SignInTimeOut");
            var nolabel = kony.i18n.getLocalizedString("i18n.tab.Cancel");
            var basicConf = {
                message: msg,
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: title,
                yesLabel: yeslabel,
                noLabel: nolabel,
                alertHandler: handle
            };
            var pspConf = {};
            kony.ui.Alert(basicConf, pspConf);
        },
        showCustomConfirmAlert: function(msg, title, yeslabel, nolabel, callback) {
            if (this.isNullorEmpty(title)) {
                title = kony.i18n.getLocalizedString("i18n.clorox.confirmation");
            }
            var basicConf = {
                message: msg,
                alertType: constants.ALERT_TYPE_CONFIRMATION,
                alertTitle: title,
                yesLabel: yeslabel,
                noLabel: nolabel,
                alertHandler: callback
            };
            var pspConf = {};
            kony.ui.Alert(basicConf, pspConf);
        },
        isValidEmail: function(emailId) {
            var atpos = emailId.indexOf("@");
            var dotpos = emailId.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailId.length) {
                return false;
            }
            return true;
        },
        getCopy: function(jsonObject) {
            //Return the Copy of the original JSON Data
            return (JSON.parse(JSON.stringify(jsonObject)));
        },
        getDateTimeInMS: function(dateTime) {
            if (!Utils.isNullorEmpty(dateTime)) {
                var timeInMilSec = new Date(dateTime).getTime();
                return timeInMilSec;
            }
        },
        getCurrentDateInISOFormat: function() {
            return new Date().toISOString();
        },
        //This Method would format the date in ISO Format to English or Spanish 
        //Eg: 2016-04-25T06:05:03.783640 is converted to 16 de Enero 2016 - 02:00PM 
        //inut for locale is "en"for English & "es" for Spanish
        formatDateTime: function(serviceDate, locale) {
            if (!Utils.isNullorEmpty(serviceDate)) {
                var time = new Date(serviceDate).toTimeString();
                var timeString = Utils.to12HrFormat(time.split(" ")[0]);
                var dateString = Utils.formatISODateString(serviceDate, "dd mmm yyyy"); //Tuesday, June 07, 2016
                return dateString + ", " + timeString;
            }
            return "";
        },
        getElapsedTimeInSec: function(lastdate) {
            var timeDiff = "";
            if (!Utils.isNullorEmpty(lastdate)) {
                var lastTimeInMS = Utils.getDateTimeInMS(lastdate);
                var currentTimeInMS = Utils.getDateTimeInMS(Utils.getCurrentDateInISOFormat());
                timeDiff = (currentTimeInMS - lastTimeInMS) / 1000;
            }
            return timeDiff;
        },
        getLocaleTimeIn12HrFormat: function(dateTime) {
            if (!Utils.isNullorEmpty(dateTime)) {
                var value = new Date(dateTime).toLocaleTimeString();
                var pieces = value.split(":");
                var hrs = pieces[0];
                var min = pieces[1];
                var amOrPm = "PM";
                if (!Utils.isNullorEmpty(pieces[2])) {
                    if (pieces[2].indexOf("AM") != -1) {
                        amOrPm = "AM";
                    }
                }
                var timeIn12HrFormat = hrs + ":" + min + " " + amOrPm;
                return timeIn12HrFormat;
            }
        },
        //This fucntion return date in YYYY-MM-DD format.
        formatDateToYYYYMMDD: function(date) {
            return Utils.formatISODateString(date, "yyyy-mm-dd");
        },
        getPreviousDayDate: function(d) {
            try {
                var date = new Date(d);
                date.setDate(date.getDate() - 1);
                return this.formatDateToYYYYMMDD(date);
            } catch (err) {}
        },
        //If direction is desc then its descending  otherwise ascending
        decodeURL: function(url) {
            return url.replace(/&amp;/g, '&');
        },
        getPreviousMonthYear: function(period) {
            var tempYear = parseInt(period.substring(0, 4));
            var tempMonth = parseInt(period.substring(4));
            if (tempMonth > 1) {
                tempMonth = tempMonth - 1;
            } else {
                tempMonth = 12;
                tempYear = tempYear - 1;
            }
            if (tempMonth < 10) {
                tempMonth = "0" + tempMonth;
            }
            var previousPeriod = tempYear + "" + tempMonth;
            return previousPeriod;
        },
        getOffsetDate: function(offsetDays) {
            var currentDate = new Date();
            var offsetDate = currentDate.setDate(currentDate.getDate() + offsetDays);
            return new Date(offsetDate);
        },
        getFinancialYear: function(period) {
            var tempYear = parseInt(period.substring(0, 4));
            var tempMonth = parseInt(period.substring(4));
            var tempMonth1;
            var tempMonth2;
            var tempYear1;
            var tempYear2;
            if (tempMonth <= 1) {
                tempMonth1 = 12;
                tempMonth2 = 11;
                tempYear1 = tempYear - 1;
                tempYear2 = tempYear - 1;
            } else if (tempMonth == 2) {
                tempMonth1 = 1;
                tempMonth2 = 12;
                tempYear1 = tempYear;
                tempYear2 = tempYear - 1;
            } else {
                tempMonth1 = tempMonth - 1;
                tempMonth2 = tempMonth - 2;
                tempYear1 = tempYear;
                tempYear2 = tempYear;
            }
            if (tempMonth1 < 10) {
                tempMonth1 = '0' + tempMonth1;
            }
            if (tempMonth2 < 10) {
                tempMonth2 = '0' + tempMonth2;
            }
            if (tempMonth < 10) {
                tempMonth = '0' + tempMonth;
            }
            return "" + tempYear + tempMonth + "," + tempYear1 + tempMonth1 + "," + tempYear2 + tempMonth2;
        },
        getDisplayableMonths: function(period) {
            var tempYear = parseInt(period.substring(0, 4));
            var tempMonth = parseInt(period.substring(4));
            if (tempMonth < 9) {
                return tempYear;
            } else {
                return tempYear + 1;
            }
        },
        /**
         * This function is used for get the country name based on countryCode
         * @method getCountryName
         */
        getCountryName: function(countryCode) {
            var countryName = "";
            if (!Utils.isNullorEmpty(countryCode)) {
                var countryInfo = UserStore.getCustomParam("countryInfo");
                for (var i in countryInfo) {
                    var isoCode = countryInfo[i].isoCountryCode;
                    var countrycd = countryInfo[i].country;
                    if (countryCode == isoCode || countryCode == countrycd) {
                        countryName = countryInfo[i].countryName;
                        break;
                    }
                }
            }
            return countryName;
        },
        /**
  Function to convert service date to Report specific date 
  It takes the Locale also as Input
  From 31-Dec-2018 to December 31,2018.
  */
        getLocaleDate: function(date, locale) {
            var d = new Date(date);
            var options = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
            var formattedDate = d.toLocaleDateString(locale, options);
            return formattedDate;
        },
        dateFormatForReport: function() {
            var d = new Date();
            var year = Utils.zfill(d.getFullYear().toString());
            var month = Utils.zfill((parseInt(d.getMonth()) + 1).toString());
            var day = Utils.zfill(d.getDate().toString());
            var hours = Utils.zfill(d.getHours().toString());
            var minutes = Utils.zfill(d.getMinutes().toString());
            var seconds = Utils.zfill(d.getSeconds().toString());
            var timeFormat = year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".043Z";
            return timeFormat;
        },
        zfill: function(st) {
            if (st.length < 2) return "0" + st;
            else return st;
        },
        getGuid: function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        openExternalBrowser: function(urlParams) {
            if (urlParams) {
                kony.application.openURL(urlParams.urlToOpen);
            }
        },
        openWebURLForm: function(urlParams) {
            if (urlParams) {
                if (deviceUtil.isAndroid()) {
                    var navObj = new kony.mvc.Navigation("frmPdfCustomWidgetAndroid");
                    navObj.navigate(urlParams);
                } else {
                    var paramObj = {
                        urlParams: urlParams,
                        formName: "frmRegistration"
                    };
                    var navObj = new kony.mvc.Navigation("frmWebURL");
                    navObj.navigate(paramObj);
                }
            }
        },
        openWebURL: function(urlParams) {
            if (urlParams) {
                var paramObj = {
                    urlParams: urlParams,
                    formName: "frmWebRegistration"
                };
                var navObj = new kony.mvc.Navigation("frmWebURL");
                navObj.navigate(paramObj);
            }
        },
        currency: function(countryCode) {
            var currency = "";
            if (countryCode === "US") {
                currency = "$";
            } else if (countryCode === "CA") {
                currency = "$";
            } else if (countryCode === "DO") {
                currency = "$";
            }
            return currency;
        },
        //This Method would format the Amount or curency to millions format and also truncates the decimal points
        //Eg: 100000.99999 is converted to 100,000.99 if the decimal is 2
        format: function(val, decimal, locale) {
            try {
                if (val == "--") {
                    return val;
                }
                var num = "";
                if (!Utils.isNullorEmpty(val)) {
                    var charsArr = ["."];
                    if (kony.string.containsChars(val, charsArr) === false) {
                        val = val + ".00";
                    }
                    if (val === Math.floor(val)) {
                        num = val;
                    } else {
                        val = "" + val;
                        num = Utils.formatAmount(val, decimal, locale);
                    }
                }
                if (num == "0" || num == 0) {} else if (!Utils.isNullorEmpty(num)) {
                    var splitTemp = num.split(".");
                    if (Utils.isNullorEmpty(splitTemp[1])) {
                        num = num + ".00";
                    } else if (splitTemp[1].length == 1) {
                        num = num + "0";
                    }
                }
                return num;
            } catch (e) {}
        },
        formatAmount: function(val, decimal, locale) {
            try {
                var DECIMAL_NOTATION = ".";
                var MILLION_NOTATION = ",";
                // var decimal = 0;
                var num = "";
                var scale = 1;
                var isNegative = false;
                val = parseFloat(Utils.removeFormat(val));
                //decimal = utilController.getDecimalPlaces(val);
                if (val < 0) {
                    isNegative = true;
                    val = Math.abs(val);
                }
                if (Utils.isNullorEmpty(decimal)) decimal = 2;
                for (var j = 0; j < decimal; j++) scale *= 10;
                var str = "" + Math.round(parseFloat(val) * scale);
                while (str.length <= decimal) str = "0" + str;
                var point = str.length - decimal;
                var num1 = "";
                var i = point - 3;
                while (i >= 0) {
                    num1 = str.substring(i, i + 3);
                    if (i != point - 3) num1 = num1 + MILLION_NOTATION + num;
                    num = num1;
                    i -= 3;
                }
                if (i != -3) {
                    num1 = str.substring(0, i + 3);
                    if (point > 3) num1 = num1 + MILLION_NOTATION + num;
                    num = num1;
                }
                if (decimal !== 0) {
                    num = num + DECIMAL_NOTATION + str.substring(point, str.length);
                }
                if (isNegative) {
                    num = "-" + num;
                }
                return num;
            } catch (e) {}
        },
        removeFormat: function(value) {
            if (!Utils.isNullorEmpty(value)) {
                value = "" + value;
                var valueArr = value.split(",");
                var valueStr = "";
                for (var i = 0; i < valueArr.length; i++) {
                    valueStr = valueStr + valueArr[i];
                }
                return valueStr;
            }
            return "";
        },
        bonusPercentageRange: function(bonusValues, groupPV) {
            var maxPercent = 0;
            if (!Utils.isNullorEmpty(bonusValues) && bonusValues.bonusSchedules.length > 0) {
                for (var t = 0; t < bonusValues.bonusSchedules.length; t++) {
                    if (gblPartyCountry === bonusValues.bonusSchedules[t].isoCountry) {
                        var sortedRange = bonusValues.bonusSchedules[t].bonusDetails.sort(function(a, b) {
                            return (a.volume > b.volume) ? 1 : ((b.volume > a.volume) ? -1 : 0);
                        });
                        for (var p = 0; p < sortedRange.length - 1; p++) {
                            if (groupPV < sortedRange[p].volume && p === 0) {
                                maxPercent = 0;
                                break;
                            } else if (groupPV >= sortedRange[p].volume && groupPV < sortedRange[p + 1].volume) {
                                maxPercent = sortedRange[p].percent;
                                if (Utils.isNullorEmpty(maxPercent)) {
                                    maxPercent = 0;
                                }
                                break;
                            }
                        }
                        if (p === sortedRange.length - 1) {
                            maxPercent = sortedRange[p].percent;
                            if (Utils.isNullorEmpty(maxPercent)) {
                                maxPercent = 0;
                            }
                            break;
                        }
                    }
                }
            }
            return maxPercent;
        },
        cacheTwoMin: function(newTime, lastTime) {
            diff = Math.abs(newTime - new Date(lastTime));
            if (Math.floor((diff / 1000) / 60) > 2) return true;
            else return false;
        },
        getCountryCdName: function(countyCode) {
            if (G_SUPPORT_EMAILS.filter(function(e) {
                    return e.countryCode === countyCode;
                }).length === 0) {
                return "";
            } else {
                // get country Name from array
                let thisFeature = G_SUPPORT_EMAILS.filter(function(e) {
                    return e.countryCode === countyCode;
                })[0];
                return thisFeature.countryName;
            }
        },
        getDateMMDDYYYYFormat: function() {
            var today = new Date();
            var monthArray = Utils.getShortMonths()();
            var mm = today.getMonth();
            var month = monthArray[mm];
            var yyyy = today.getFullYear();
            var date = today.getDate();
            today = date + " " + month + ", " + yyyy;
            return today;
        },
        getCurrMonthDate: function() {
            var today = new Date();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '' + mm;
            return today;
        },
        getLastMonthDate: function() {
            var today = new Date();
            var mm = today.getMonth();
            var yyyy = today.getFullYear();
            if (mm === 0) { //Jan
                mm = 12; //Dec
                yyyy = yyyy - 1;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '' + mm;
            return today;
        },
        getLastPrevMonthDate: function() {
            var today = new Date();
            var mm = 0;
            var yyyy = today.getFullYear();
            if (today.getMonth() === 0) { //Jan
                mm = 11; //Nov
                yyyy = yyyy - 1;
            } else if (today.getMonth() === 1) { //Feb
                mm = 12; //Dec
                yyyy = yyyy - 1;
            } else {
                mm = today.getMonth() - 1;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '' + mm;
            return today;
        },
        getCurrentMonth: function() {
            var today = new Date();
            var mm = today.getMonth() + 1;
            if (mm < 10) {
                mm = '0' + mm;
            }
            return mm;
        },
        /**
         * Supports date formats of YYYY-MM-DD
         *
         * @param {String} dateString of YYYY-MM-DD
         * @return {Date}
         */
        getDateInLocalTZ: function(dateString, inHours, inMinutes) {
            var rtnDate = null;
            if (dateString !== null && dateString.length > 9) {
                const d = dateString.split(/[- :T]/);
                const date = new Date(d[0], d[1] - 1, d[2], inHours, inMinutes);
                rtnDate = date;
            }
            return rtnDate;
        },
        getTranslatedValue: function(key, length, lines) {
            try {
                var value;
                if (key !== null && key !== undefined && key !== "") {
                    value = kony.i18n.getLocalizedString(key);
                }
                if (typeof length !== "undefined" && length && Number.isInteger(length) && length > 0 && !Utils.isNullorEmpty(value)) {
                    if (value.length <= length) {
                        return value;
                    }
                    if (value.substr(0, length).indexOf(' ') < 0) {
                        return value.substr(0, length - 3) + "...";
                    }
                    if (typeof lines == "undefined" || !lines || isNaN(lines) || lines <= 0) {
                        lines = 2;
                    }
                    if (lines == 1) {
                        return value.substr(0, length - 3) + "...";
                    }
                    var valueWords = value.split(/(\s+)/);
                    var splitLines = [];
                    var i = 0;
                    var concatLength = 0;
                    for (var j = 0; j < lines - 1; j++) {
                        var lineText = "";
                        for (; i < valueWords.length; i++) {
                            if (lineText.length + valueWords[i].length <= length) {
                                lineText += valueWords[i];
                                concatLength += valueWords[i].length;
                            } else {
                                i--;
                                break;
                            }
                        }
                        splitLines.push(lineText);
                    }
                    var lastLine = (value.length - concatLength) > length ? value.substr(concatLength, length - 3) + "..." : value.substring(concatLength, value.length);
                    splitLines.push(lastLine);
                    return splitLines.join("\n");
                } else {
                    return value;
                }
            } catch (e) {}
        },
        // function deduplicate - remove duplicates in the input array
        //
        deduplicate: function(data) {
            if (data.length > 0) {
                var result = [];
                data.forEach(function(elem) {
                    if (result.indexOf(elem) === -1) {
                        result.push(elem);
                    }
                });
                return result;
            }
        },
        isEmptyObject: function(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) return false;
            }
            return true;
        },
        checkIfNetworkIsAvailable: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        },
        isNullorUndefined: function(value) {
            if (((typeof(value) == "undefined") || (value === null) || (value === "") || (value === undefined) || (value === " "))) {
                return true;
            } else {
                return false;
            }
            return false;
        },
        dumpError: function(inError, inShowObject) {
            var rtnError = null;
            var sError = inError.errmsg;
            var sObject = "";
            if (!Utils.isNullorEmpty(inError.allResponse) && inError.allResponse.length > 0 && !Utils.isNullorEmpty(inError.allResponse[0].volumeDetailPeriods) && inError.allResponse[0].volumeDetailPeriods.length > 0) sObject = inError.allResponse[0].volumeDetailPeriods[0];
            kony.print(" *** Error! Error message: " + sError);
            kony.print(" *** Error! Error found in response object: " + JSON.stringify(sObject));
            rtnError = sError;
            if (inShowObject) rtnError = sError + "\n" + JSON.stringify(sObject);
            return rtnError;
        },
        parseBoolean: function(inString) {
            var rtnBool = false;
            if (inString.trim().toLowerCase() === "true") rtnBool = true;
            return rtnBool;
        },
        showGenericError: function(errString) {
            try {
                Utils.hideLoadingIndicator();
                if (errString) {
                    alert(errString);
                } else {
                    Utils.showGenericError(Utils.getTranslatedValue("i18n.clorox.serviceerror"));
                }
            } catch (err) {
                Utils.hideLoadingIndicator();
                kony.print("Error inside showGenericError::" + err);
            }
        },
        encryptAESVA: function(text, key) {
            var paddingScheme = "";
            paddingScheme = "pkcs5";
            var propertiesTable = "1234567890123456";
            var encryptedTable = "";
            //rawbytes, errornumber, errormessage
            encryptedTable = kony.crypto.encrypt("aes", key, text, {
                padding: paddingScheme,
                mode: "cbc",
                initializationvector: propertiesTable
            });
            //kony.print("rawbytes" + encryptedTable);
            return encryptedTable;
        },
        decryptAESVA: function(rawbytes, key) {
            var txt = "";
            var paddingScheme = "";
            paddingScheme = "pkcs5";
            var propertiesTable = "1234567890123456";
            txt = kony.crypto.decrypt("aes", key, rawbytes, {
                padding: paddingScheme,
                mode: "cbc",
                initializationvector: propertiesTable
            });
            return txt;
        },
        saveToStore: function(keyName, text) {
            var uniqId = UserStore.getUserParam(StoreKeys.LOS_KUID);
            var encryptDecryptKey = kony.crypto.readKey(uniqId);
            var encText = Utils.encryptAESVA(text, encryptDecryptKey);
            var encTextBase64 = kony.convertToBase64(encText);
            try {
                kony.store.setItem(keyName, encTextBase64);
            } catch (err) {
                kony.print("Issue is setting to data store");
            }
        },
        readFromStore: function(keyName) {
            try {
                kony.print("Inside readFromStore>>>" + keyName);
                if (!Utils.isNullorEmpty(kony.store.getItem(keyName))) {
                    var uniqId = UserStore.getUserParam(StoreKeys.LOS_KUID);
                    var decrText = "";
                    var encryptDecryptKey = kony.crypto.readKey(uniqId);
                    var encTextBase64 = kony.store.getItem(keyName);
                    var encTextRawBytes = kony.convertToRawBytes(encTextBase64);
                    if (encTextBase64 !== null) {
                        decrText = Utils.decryptAESVA(encTextRawBytes, encryptDecryptKey);
                    }
                    return decrText;
                } else {
                    return null;
                }
            } catch (err) {
                Utils.hideLoadingIndicator();
                return null;
            }
        },
        removeFromStore: function(keyName) {
            if (!Utils.isNullorEmpty(Utils.readFromStore(keyName))) {
                kony.store.removeItem(keyName);
            }
        },
        clearStoreAndOfflineData: function() {
            //Clear globals
            //---------Clear Store variables----------------------------
            //---------Clear offline Device database data---------------
        },
        initLocaleVariables: function() {
            var currLocale = kony.i18n.getCurrentLocale().replace("_", "-");
            var baseDate = new Date(Date.UTC(2020, 7, 2));
            currLocale = currLocale.replace("_", "-");
            for (var i = 0; i < 12; i++) {
                MONTHS_LONG.push(new Date(2020, i, 1).toLocaleString(currLocale, {
                    month: "long"
                }).replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
                MONTHS_SHORT.push(new Date(2020, i, 1).toLocaleString(currLocale, {
                    month: "short"
                }).replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
                if (i >= 7) continue;
                DAY_NAMES.push(baseDate.toLocaleDateString(currLocale, {
                    weekday: 'short'
                }).replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
                baseDate.setDate(baseDate.getDate() + 1);
            }
        },
        getLongMonths: function() {
            if (MONTHS_LONG.length > 0) return MONTHS_LONG;
            Utils.initLocaleVariables();
            return MONTHS_LONG;
        },
        getShortMonths: function() {
            if (MONTHS_SHORT.length > 0) return MONTHS_SHORT;
            Utils.initLocaleVariables();
            return MONTHS_SHORT;
        },
        getDayNames: function() {
            if (DAY_NAMES.length > 0) return DAY_NAMES;
            Utils.initLocaleVariables();
            return DAY_NAMES;
        },
        getCurrentShortMonth: function() {
            var date = new Date();
            var monthIndex = date.getMonth();
            var mlist = Utils.getShortMonths();
            var currmonth = mlist[monthIndex];
            return currmonth;
        },
        getNextShortMonth: function() {
            var date = new Date();
            var monthIndex = date.getMonth();
            var mlist = Utils.getShortMonths();
            var nextMonth = mlist[monthIndex + 1];
            if (mlist.length === (monthIndex + 1)) {
                nextMonth = mlist[0];
            }
            return nextMonth;
        },
        getCurrentLongtMonth: function() {
            var date = new Date();
            var monthIndex = date.getMonth();
            var mlist = Utils.getLongMonths();
            var currmonth = mlist[monthIndex];
            return currmonth;
        },
        formatDeviceText: function(message, deviceType) {
            var promptMessage = "";
            if (deviceType) {
                switch (deviceType) {
                    case "none":
                        promptMessage = message.replace(/XXXX/g, kony.i18n.getLocalizedString("i18n.biometrics.text"));
                        break;
                    case "fingerPrint":
                        promptMessage = message.replace(/XXXX/g, kony.i18n.getLocalizedString("i18n.clorox.fingerprint"));
                        break;
                    case "touchId":
                        promptMessage = message.replace(/XXXX/g, kony.i18n.getLocalizedString("i18n.touchIdAA.text"));
                        break;
                    case "faceId":
                        promptMessage = message.replace(/XXXX/g, kony.i18n.getLocalizedString("i18n.FaceIdAA.text"));
                        break;
                    case "undefined":
                        promptMessage = message.replace(/XXXX/g, kony.i18n.getLocalizedString("i18n.biometrics.text"));
                        break;
                }
            }
            return promptMessage;
        },
        getNextLongMonth: function() {
            var date = new Date();
            var monthIndex = date.getMonth();
            var mlist = Utils.getLongMonths();
            var nextMonth = mlist[monthIndex + 1];
            if (mlist.length === (monthIndex + 1)) {
                nextMonth = mlist[0];
            }
            return nextMonth;
        },
        getTimestamp: function() {
            var d = new Date(); //2020-01-27 14:00:32.0
            var year = d.getFullYear();
            var month = Number(d.getUTCMonth() + 1);
            month = month < 10 ? "0" + month : month;
            var date = d.getUTCDate();
            date = date < 10 ? "0" + date : date;
            var hr = d.getUTCHours();
            hr = hr < 10 ? "0" + hr : hr;
            var mins = d.getUTCMinutes();
            mins = mins < 10 ? "0" + mins : mins;
            var sec = d.getUTCSeconds();
            sec = sec < 10 ? "0" + sec : sec;
            var timestamp = year + "-" + month + "-" + date + " " + hr + ":" + mins + ":" + sec + ".0";
            return timestamp;
        },
        isValidURL: function(url) {
            var regexp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
            if (regexp.test(url)) {
                return true;
            } else {
                return false;
            }
        },
        setTitleCase: function(string) {
            return string.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        getDateMMDDYYYY(date) {
            var today = new Date(date);
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = mm + '/' + dd + '/' + yyyy;
            return today;
        },
        getDateMMYYYYFormat: function() {
            var today = new Date();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '' + mm;
            return today;
        },
        getFormattedDate(dateStr) {
            var dateArr = dateStr.split("T");
            var fullDate = dateArr[0];
            var fullDateArr = fullDate.split("-");
            return fullDateArr[1] + "/" + fullDateArr[2] + "/" + fullDateArr[0];
        },
        secondsToString: function(seconds) {
            var numdays = Math.floor(seconds / 86400);
            var numhours = Math.floor((seconds % 86400) / 3600);
            var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
            var numseconds = ((seconds % 86400) % 3600) % 60;
            return numdays;
        },
        getDayName: function(day) {
            switch (day) {
                case 0:
                    return kony.i18n.getLocalizedString("i18n.clorox.SundayCap");
                case 1:
                    return kony.i18n.getLocalizedString("i18n.clorox.MondayCap");
                case 2:
                    return kony.i18n.getLocalizedString("i18n.clorox.TuesdayCap");
                case 3:
                    return kony.i18n.getLocalizedString("i18n.clorox.WednesdayCap");
                case 4:
                    return kony.i18n.getLocalizedString("i18n.clorox.ThursdayCap");
                case 5:
                    return kony.i18n.getLocalizedString("i18n.clorox.FridayCam");
                case 6:
                    return kony.i18n.getLocalizedString("i18n.clorox.SaturdayCap");
            }
        },
        getRequestMethod: function(overviewType, isChart = false) {
            let requestMethod = "";
            if (overviewType === kony.i18n.getLocalizedString("i18.clorox.mtdOrders")) {
                if (isChart === true) requestMethod = DOS.fetchMTDOrdersChart;
                else requestMethod = DOS.fetchMTDOrders;
            } else if (overviewType === kony.i18n.getLocalizedString("i18.clorox.avgDaily")) {
                if (isChart === true) requestMethod = DOS.fetchAvgDailyOrdersChart;
                else requestMethod = DOS.fetchAvgDailyOrders;
            } else if (overviewType === kony.i18n.getLocalizedString("i18.clorox.mtdShipments")) {
                if (isChart === true) requestMethod = DOS.fetchMTDShipmentsChart;
                else requestMethod = DOS.fetchMTDShipments;
            } else {
                requestMethod = DOS.getOverview;
            }
            return requestMethod;
        },
        dismissDOSInternetLossPopup: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm)) {
                if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                    currFrm.flxGenericError.setVisibility(true);
                } else {
                    if (!Utils.isNullorEmpty(currFrm.flxGenericError)) {
                        currFrm.flxGenericError.skin = "sknFlxTransparent";
                        currFrm.flxGenericError.setVisibility(false);
                    }
                    if (currFrm.FeedbackPopup.isVisible === false && currFrm.SharePopup.isVisible === false) {
                        fetchDOSData("frmDOSHome", gblDOSHomeQuery);
                        kmsUtil.confirmPushNotifications();
                    }
                }
            }
        },
        dismissInternetLossPopup: function() {
            var currFrm = kony.application.getCurrentForm();
            if (!Utils.isNullorEmpty(currFrm)) {
                if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                    currFrm.flxGenericError.setVisibility(true);
                } else {
                    if (!Utils.isNullorEmpty(currFrm) && !Utils.isNullorEmpty(currFrm.flxGenericError)) {
                        currFrm.flxGenericError.skin = "sknFlxTransparent";
                        currFrm.flxGenericError.setVisibility(false);
                    }
                    if (currFrm.id === "frmLogin") {
                        if (!gblIsFabricInitilised) {
                            LoginReference.view.loadingIndicator.isVisible = true;
                            GlobalServices.initialiseMobileFabric(LoginReference.fetchAppUpgradeData);
                        } else {
                            if (LoginReference.view.Login.checkBiometricSupport() && kony.store.getItem('isUserBioMetricEnabled')) {
                                LoginReference.view.Login.invokeIdentityService();
                            }
                        }
                    }
                }
            }
        },
        shareFFI: function(headerView, contentView) {
            try {
                var header = headerView;
                var content = contentView;
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.SharePopup)) {
                    currForm.SharePopup.setImageData(header, content);
                }
            } catch (e) {
                Utils.hideLoadingIndicator();
                kony.print("Exception in ShareFFI:: " + e);
            }
        },
        dismissGenericErrorPopup: function() {
            try {
                var currForm = kony.application.getCurrentForm();
                if (!Utils.isNullorEmpty(currForm) && !Utils.isNullorEmpty(currForm.flxGenericError)) {
                    currForm.flxGenericError.setVisibility(false);
                }
            } catch (e) {
                Utils.hideLoadingIndicator();
                Kony.print("Exception in dismissGenericErrorPopup:: " + JSON.stringify(e));
            }
        },
    };
    return Utils;
});