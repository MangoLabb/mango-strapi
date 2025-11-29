import type { Schema, Struct } from '@strapi/strapi';

export interface LocationCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_location_coordinates';
  info: {
    description: '';
    displayName: 'coordinates';
    icon: 'earth';
  };
  attributes: {
    latitude: Schema.Attribute.String;
    longitude: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location.coordinates': LocationCoordinates;
    }
  }
}
