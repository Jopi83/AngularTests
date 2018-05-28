export class Placement {
  "id":number;
  "name":string;
  "code":string;
  "code2":string;
  "code3":string;
  "state":string;
  "cost_cpm":string;//??
  "publisher_id":number;
  "content_retrieval_timeout_ms":number;
  "enable_for_mediation":boolean;
  "is_prohibited":boolean;
  "site_id":number;
  "default_referrer_url":string;
  "reserve_price":string; //??
  "width":number;
  "height":number;
  "default_position":string;
  "default_creative_id":number;
  "ad_profile_id":number;
  "acb_code":string; //??
  "tag_data":string; //??
  "hide_referer":boolean;
  "exclusive":boolean;
  "pixel_url":string;
  "pixel_type":string;
  "last_modified":string;
  //"media_subtypes":[{'id': number, 'is_private': boolean, 'name': string, 'media_type': {'id': number}}]; //??
  "media_subtypes":Array<Object>; //??
  "intended_audience":Array<Object>; //??
  "audited":boolean;
  "audit_level":string;
  "default_calculation_type":string;
  "publisher_name":string;
  "site_name":string;
  "site_audit_status":string;
  "demand_filter_action":string;
  "visibility_profile_id":number;
  "is_resizable":boolean;
  "pixel_url_secure":string;
  "floor_application_target":string;
  "use_detected_domain":boolean;
  "buy_it_now_price":number;
  "pop_values":string; //??
  "toolbar":string; //??
  "inventory_attributes":string; //??
  "supported_media_types":Array<Object>;
  "supported_media_subtypes":Array<Object>
  "content_categories":Array<Object>; //??
  "segments":Array<Object>; //??
  "estimated_clear_prices":Array<Object>;
  "filtered_advertisers":Array<Object>; //??
  "filtered_line_items":Array<Object>; //??
  "filtered_campaigns":Array<Object>; //??
  "default_creatives":Array<Object>; //??
  "private_sizes":Array<Object>; //??
  "video":Object;
  "ad_types":Array<Object>; //??
  }