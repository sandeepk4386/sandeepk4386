define(function () {
  return {
    FEEDBACK_MIN : 10,
    FEEDBACK_MAX : 1000,

    // group_name for metrics
    GROUP_NAME_ADO : "Average Daily Orders",
    GROUP_NAME_MTD_ORDERS : "MTD Orders",
    GROUP_NAME_MTD_SHIPMENTS:"MTD Shipments",
    GROUP_NAME_NONE:"None",
    GROUP_NAME_NDF:"NDF",

    // color_group for metrics
    COLOR_GROUP_ORDERS:"Orders",
    COLOR_GROUP_SHIPMENTS:"Shipments",
    COLOR_GROUP_FORECAST:"Forecast",

    // kpi_name for Metrics
    MTD_ORDERS :"mtd_orders",//"name":"MTD Orders",
    MTD_ORDERS_VS_MTD_YA_ORDERS_INDEX :"mtd_orders_vs_mtd_ya_orders_index",//"name":"Index vs YA",
    MTD_ORDERS_YA_CHANGE :"mtd_orders_ya_change",//"name":"Change vs YA",

    AVG_DAILY_ORDERS : "avg_daily_orders",//"name":"Average Daily Orders",
    ADO_TO_GO_VS_NDF:"ado_to_go_vs_ndf",//"name":"To Go vs NDF",
    NEW_ORDERS :"new_orders",//"name":"New Orders",

    MTD_SHIPMENTS :"mtd_shipments",//"name":"MTD Shipments",
    MTD_SHIPMENTS_YA_CHANGE :"mtd_shipments_ya_change",//"name":"Change vs YA",
    MTD_SHIPMENTS_VS_NDF :"mtd_shipments_vs_ndf",//"name":"Index vs NDF",

    AVG_DAILY_ORDERS_VS_YA_INDEX :"avg_daily_orders_vs_ya_index",//"name":"ADO To Go vs YA Index",
    MTD_SHIPMENTS_YA_INDEX :"mtd_shipments_ya_index",//"name":"MTD Shipments YA Index",

    MTD_YA_ORDERS :"mtd_ya_orders",//"name":"MTD Orders YA",
    FAVORABLE_UNFAVORABLE_VS_NDF :"favorable_unfavorable_vs_ndf",//"name":"Favorable/Unfavorable vs NDF",
    NEW_SHIPMENTS :"new_shipments",//"name":"New Shipments",
    INVOICED_QTY_SC_LYR_MTD :"invoiced_qty_sc_lyr_mtd",//"name":"MTD Shipments YA",    
    PRIOR_MONTH_SHIPPED :"prior_month_shipped",//"name":"Prior Month Shipments",
    NET_DEMAND_FORECAST_QTY_SC :"net_demand_forecast_qty_sc",//"name":"NDF",
    MOST_RECENT_FINANCIAL_FCST :"most_recent_financial_fcst",//"name":"Financial Forecast",

    //ADO Metrics 
    ADO_NEW_ORDERS:"new_orders",//"group_name":"Average Daily Orders","name":"New Orders",
    ADO_AVG_DAILY_ORDERS:"avg_daily_orders",//"group_name":"Average Daily Orders","name":"Average Daily Orders",
    ADO_AVG_DAILY_ORDERS_VS_YA_INDEX:"avg_daily_orders_vs_ya_index",//"group_name":"None","name":"Average Daily Orders To Go vs YA Index",
    ADO_NET_DEMAND_FORECAST_QTY_SC:"net_demand_forecast_qty_sc",//"group_name":"None","name":"NDF",
    ADO_ADO_TO_GO_VS_NDF:"ado_to_go_vs_ndf",//"group_name":"Average Daily Orders","name":"Average Daily Orders To Go to hit NDF",

    // MTD Orders Metrics
    ODR_MTD_ORDERS:"mtd_orders",//"group_name":"MTD Orders","name":"MTD Orders",
    ODR_MTD_YA_ORDERS:"mtd_ya_orders",//"group_name":"None","name":"MTD Orders YA",
    ODR_MTD_ORDERS_YA_CHANGE:"mtd_orders_ya_change",//"group_name":"MTD Orders","name":"Change vs YA",
    ODR_MTD_ORDERS_VS_MTD_YA_ORDERS_INDEX:"mtd_orders_vs_mtd_ya_orders_index",//"group_name":"MTD Orders","name":"MTD Orders vs YA Index",
    ODR_NET_DEMAND_FORECAST_QTY_SC:"net_demand_forecast_qty_sc",//"group_name":"None","name":"NDF",
    ODR_FULL_MONTH_YA:"full_month_ya",//"group_name":"None","name":"Full Month Orders YA",
    ODR_MTD_ORDERS_VS_NDF: "mtd_ndf_index",
    ODR_MTD_ORDERS_INDEX_VS_FINANCIAL_FORECAST: "mtd_ff_index",
    
    // MTD Shipment Metrics
    SHIP_MTD_SHIPMENTS:"mtd_shipments",//"group_name":"MTD Shipments","name":"MTD Shipments",
    SHIP_MTD_YA_SHIPMENTS:"mtd_ya_shipments",//"group_name":"None","name":"MTD Shipments YA",
    SHIP_MTD_SHIPMENTS_YA_CHANGE :"mtd_shipments_ya_change",//"group_name":"MTD Shipments","name":"Change vs YA",
    SHIP_MTD_SHIPMENTS_YA_INDEX:"mtd_shipments_ya_index",//"group_name":"None","name":"MTD Shipments vs YA Index",
    SHIP_NET_DEMAND_FORECAST_QTY_SC:"net_demand_forecast_qty_sc",//"group_name":"None","name":"NDF",
    SHIP_MTD_SHIPMENTS_VS_NDF:"mtd_shipments_vs_ndf",//"group_name":"MTD Shipments","name":"Index vs NDF",
    SHIP_INVOICED_QTY_SC_LYR_MTH:"invoiced_qty_sc_lyr_mth",//ame":"Full Month Shipments YA","value":"43427",
    
    // NDF Metrics
    NDF_QTY_SC:"net_demand_forecast_qty_sc",//"group_name":"NDF","name":"NDF",
    NDF_MTD_SHIPMENTS:"mtd_shipments",//"group_name":"MTD Shipments","name":"MTD Shipments",
    NDF_MTD_SHIPMENTS_VS_NDF:"mtd_shipments_vs_ndf",//"group_name":"NDF","name":"Index vs NDF",
    NDF_FINANCIAL_FORECAST:"most_recent_financial_fcst",//"group_name":"None","name":"Financial Forecast",
    NDF_MTD_ORDERS: "mtd_orders",//"group_name":"MTD Orders","name":"MTD Orders",
    NDF_MTD_ORDERS_VS_NDF:"mtd_ndf_index",//"group_name":"NDF","name":"MTD Orders Index vs NDF",
    
    //new names until we get new key from metrics
    ADDITIONAL_METRICS:"Additional_Metrics",
    GROUPVALUE: "header",
    RIGHTVALUE: "right",
    LEFTVALUE: "left",
    
    //client prop keys
    DEFINITIONS: "DEFINITIONS",
    FEEDBACK_VALUES: "FEEDBACK VALUES",
    PLAY_STORE_URL: "PLAY STORE URL",
    APP_STORE_URL: "APP STORE URL",
    ENABLE_TUTORIAL: "ENABLE TUTORIAL",
    COLLABORATION: "COLLABORATION",
    MINIMUM_REQUIRED_VERSION_ANDROID: "MINIMUM REQUIRED VERSION ANDROID",
    LATEST_VERSION_ANDROID: "LATEST VERSION ANDROID",
    MINIMUM_REQUIRED_VERSION_IOS: "MINIMUM REQUIRED VERSION IOS",
    LATEST_VERSION_IOS: "LATEST VERSION IOS",
    APP_SESSION_TIMEOUT: "APP SESSION TIMEOUT",
    MESSAGE_CENTER: "MESSAGE CENTER",
    NOTIFICATION_TOAST_INTERVAL: "NOTIFICATION TOAST INTERVAL",
    OVERVIEW_METRICS_SORT: "OVERVIEW METRICS SORT",
    NEWS_CONTENT: "NEWS CONTENT",
    ENABLE_NEWS: "ENABLE NEWS"
  };
});