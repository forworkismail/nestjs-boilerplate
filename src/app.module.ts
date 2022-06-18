import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule, ConfigModule.forRoot()],
})
export class AppModule {}
