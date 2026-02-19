import { Schema, model, Document, Types } from "mongoose";
import { Create_Lesson } from "../interfaces/Create_ILesson";

type LessonDoc = Create_Lesson & Document;

const LessonSchema = new Schema<LessonDoc>({
  title: { type: String, required: [true, "El título es obligatorio"] },
  content: { type: String, required: [true, "El contenido es obligatorio"] },
  duration: { type: Number, required: [true, "La duración es obligatoria"] },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: false },
});

export default model<LessonDoc>("Lesson", LessonSchema);
