declare module 'react-web-vector-icons' {
    import React from 'react';
  
    class Icon extends React.Component<IconProps> {}
  
    export interface IconProps {
      name: string;
      font: FontType;
      size?: number;
      color?: string;
      className?: string
    }
  
    export type FontType =
      | 'AntDesign'
      | 'Entypo'
      | 'EvilIcons'
      | 'Feather'
      | 'FontAwesome'
      | 'FontAwesome5'
      | 'FontAwesome6'
      | 'Fontisto'
      | 'Foundation'
      | 'Ionicons'
      | 'Lucide'
      | 'MaterialCommunityIcons'
      | 'MaterialIcons'
      | 'Octicons'
      | 'SimpleLineIcons'
      | 'Zocial';
  
    export = Icon;
  }
  