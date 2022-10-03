import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookmarkController } from './bookmark.controller';
import { BookmarkServcie } from './bookmark.service';

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkServcie, PrismaService],
})
export class BookmarkModule {}
