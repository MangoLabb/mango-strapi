import type { Schema, Struct } from '@strapi/strapi';

export interface LocationCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_location_coordinates';
  info: {
    displayName: 'coordinates';
    icon: 'earth';
  };
  attributes: {
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location.coordinates': LocationCoordinates;
    }
  }
}
