import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
    selector: 'app-albums',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './albums.html',
    styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
    albums: Album[] = [];
    loading = true;

    constructor(private albumService: AlbumService) { }

    ngOnInit(): void {
        this.albumService.getAlbums().subscribe({
            next: (albums) => {
                this.albums = albums;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        });
    }

    deleteAlbum(id: number, event: Event): void {
        event.stopPropagation();
        event.preventDefault();
        this.albumService.deleteAlbum(id).subscribe(() => {
            this.albums = this.albums.filter(a => a.id !== id);
        });
    }
}
