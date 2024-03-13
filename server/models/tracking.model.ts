import { Schema, model } from 'mongoose';

interface TrackingData extends TrackingParamsEvent {
  timestamps: Date;
}

const TrackingSchema = new Schema<TrackingData>(
  {
    userId: {
      type: String,
      required: true,
      maxlength: 16,
    },
    url: String,
    eventName: {
      type: String,
      required: true,
    },
    variation: String,
  },
  { timestamps: true }
);

export const Tracking = model('Tracking', TrackingSchema);
